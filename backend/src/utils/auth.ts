import validator from 'validator';
import { authUserId, user } from '../types/interface';
import { getData } from '../dataStore';
import { scryptSync, randomBytes } from 'crypto';

function hashPassword(password: string): string {
    const salt = randomBytes(16).toString('hex');
    const derivedKey = scryptSync(password, salt, 64, {
      N: 2 ** 9,
      r: 8,
      p: 2
    });
    return `${salt}:${derivedKey.toString('hex')}`;
  }


function verifyPassword(password: string, hash: string): boolean {
    const [salt, key] = hash.split(':');
    const derivedKey = scryptSync(password, salt, 64, {
      N: 2 ** 9,
      r: 8,
      p: 2
    });
    return key === derivedKey.toString('hex');
  }

function adminAuthRegister(email: string, password: string, nameFirst: string, nameLast: string): authUserId {
    if (!validator.isEmail(email)) {
      throw new Error('Email address is not valid');
    }
    if (getData().users.some((user: user) => user.email === email)) {
      throw new Error('Email address is already in use');
    }
    if (!/^[a-zA-Z\s\-']+$/.test(nameFirst)) {
      throw new Error('nameFirst has invalid characters');
    }
    if (nameFirst.length < 2 || nameFirst.length > 20) {
      throw new Error('nameFirst has invalid length');
    }
    if (!/^[a-zA-Z\s\-']+$/.test(nameLast)) {
      throw new Error('nameLast has invalid characters');
    }
    if (nameLast.length < 2 || nameLast.length > 20) {
      throw new Error('nameLast has invalid length');
    }
    if (password.length < 8) {
      throw new Error('password is too short');
    }
    if (!(/[a-zA-Z]/.test(password) && /\d/.test(password))) {
      throw new Error('Password does not include both a letter and a number');
    }
  
    const hash = hashPassword(password);
    const data = getData();
    const uid = Math.floor(Math.random()*100000);
  
    data.users.push({
      userId: uid,
      nameFirst: nameFirst,
      nameLast: nameLast,
      email: email,
      password: hash,
    });
  
    return { authUserId: uid };
  }

  function adminAuthLogin(email: string, password: string): authUserId {
    const data = getData();
    const user = data.users.find((user) => user.email === email);
  
    if (!user) {
      throw new Error('Email does not exist');
    }
  
    if (verifyPassword(password, user.password)) {
      return { authUserId: user.userId };
    } else {
      throw new Error('Password is incorrect');
    }
  }

  export {adminAuthRegister, adminAuthLogin}
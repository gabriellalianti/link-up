import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../components/components/ui/card";
import { Button } from "../components/components/ui/button";
import { Input } from "../components/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "../components/components/ui/avatar";

// Helper to format the timestamp into a relative time string.
function formatTime(timestamp) {
  const diff = Date.now() - timestamp;
  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days !== 1 ? "s" : ""} ago`;
}

// Recursive helper to add a reply deep in the comments tree.
function addReplyToComment(comments, commentId, replyObj) {
  return comments.map((comment) => {
    if (comment.id === commentId) {
      return { ...comment, replies: [...comment.replies, replyObj] };
    } else if (comment.replies.length > 0) {
      return { ...comment, replies: addReplyToComment(comment.replies, commentId, replyObj) };
    }
    return comment;
  });
}

// Recursive function to count all comments (top-level and nested replies)
function countAllComments(comments) {
  return comments.reduce((count, comment) => count + 1 + countAllComments(comment.replies), 0);
}

function SinglePost({ postData }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [showCommentSection, setShowCommentSection] = useState(false);
  // Each comment object: { id, text, replies: [] }
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const [, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((tick) => tick + 1);
    }, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleCommentClick = () => {
    setShowCommentSection((prev) => !prev);
  };

  // Add a new top-level comment
  const handlePostComment = () => {
    if (commentText.trim() !== "") {
      const newComment = {
        id: Math.random(),
        text: commentText,
        replies: [],
      };
      setComments((prev) => [...prev, newComment]);
      setCommentText("");
    }
  };

  // Called from any CommentItem to add a nested reply
  const handleAddReply = (commentId, replyText) => {
    if (replyText.trim() !== "") {
      const newReply = {
        id: Math.random(),
        text: replyText,
        replies: [],
      };
      setComments((prevComments) =>
        addReplyToComment(prevComments, commentId, newReply)
      );
    }
  };

  return (
    <Card className="p-0 shadow-md border bg-red-500 w-[60%] border-gray-200 mb-4">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://via.placeholder.com/40" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">User Name</h2>
            <h3 className="text-lg">Studies Something</h3>
            <p className="text-sm text-gray-500">
              {postData && postData.timestamp ? formatTime(postData.timestamp) : "Just now"}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mx-6">
        {/* Render the content posted by the user */}
        {postData && postData.content && (
          <p className="mb-4">{postData.content}</p>
        )}
        {/* Render an image if provided */}
        {postData && postData.image && (
          <img
            src={postData.image}
            alt="Post content"
            className="max-h-[200px] w-auto rounded-lg border border-gray-200"
          />
        )}
      </CardContent>

      <CardFooter className="mt-4 flex justify-end gap-2">
        <Button variant="outline" onClick={handleLike}>
          Like ({likes})
        </Button>
        <Button variant="outline" onClick={handleCommentClick}>
          Comment ({countAllComments(comments)})
        </Button>
      </CardFooter>

      {showCommentSection && (
        <div className="mx-6 mt-4 mb-2 space-y-2 border-t pt-2">
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onAddReply={handleAddReply}
              level={0} // top-level comment indentation
            />
          ))}
          <div className="flex items-center gap-2">
            <Input
              className="flex-grow"
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <Button onClick={handlePostComment}>Post</Button>
          </div>
        </div>
      )}
    </Card>
  );
}

// Recursive CommentItem component to render a comment and its replies.
function CommentItem({ comment, onAddReply, level }) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReplyClick = () => {
    setShowReplyInput((prev) => !prev);
  };

  const handlePostReply = () => {
    if (replyText.trim() !== "") {
      onAddReply(comment.id, replyText);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <div style={{ marginLeft: level * 16 }} className="mt-2">
      <div className="flex flex-col">
        <div className="flex items-start gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://via.placeholder.com/20" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div>
            <span className="font-semibold mr-2">CurrentUser</span>
            <span>{comment.text}</span>
          </div>
        </div>
        <div className="mt-1 ml-8">
          <Button
            variant="link"
            className="bg-transparent text-gray-500"
            size="sm"
            onClick={handleReplyClick}
          >
            Reply
          </Button>
        </div>
        {showReplyInput && (
          <div className="ml-8 mt-2 flex items-center gap-2">
            <Input
              className="flex-grow"
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <Button size="sm" onClick={handlePostReply}>
              Post Reply
            </Button>
          </div>
        )}
      </div>
      {comment.replies &&
        comment.replies.map((reply) => (
          <CommentItem
            key={reply.id}
            comment={reply}
            onAddReply={onAddReply}
            level={level + 1}
          />
        ))}
    </div>
  );
}

export default SinglePost;
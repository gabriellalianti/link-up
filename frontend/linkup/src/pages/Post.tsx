import React, { useState } from "react";
import { Card } from "../components/components/ui/card";
import { Button } from "../components/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../components/components/ui/avatar";
import { ScrollArea } from "../components/components/ui/scroll-area";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../components/components/ui/dropdown-menu";
import SinglePost from "./Comment"; 

function MiddleColumn() {
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Handler for file input change
  const handleMediaChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Convert the file into a temporary URL for preview
      setSelectedMedia(URL.createObjectURL(file));
    }
  };

  const handleCreatePost = () => {
    if (postContent.trim() !== "") {
      const newPost = {
        id: Date.now(), // unique ID
        content: postContent,
        timestamp: Date.now(),
        image: selectedMedia, // include media if any
      };
      setPosts([newPost, ...posts]);
      setPostContent("");
      setSelectedMedia(null);
      setDialogOpen(false);
    }
  };

  return (
    <div className="w-full md:w-[60%] flex flex-col gap-4">
      {/* Create Post Section */}
      <Card className="p-4 h-[110px]">
        <div className="flex items-center gap-4">
          <Avatar className="self-start">
            <AvatarImage src="https://via.placeholder.com/40" />
            <AvatarFallback>FN</AvatarFallback>
          </Avatar>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full h-[70px] bg-white text-black py-2 px-4 rounded-lg text-left flex justify-start items-start hover:bg-white">
                <span className="text-left">Start a post...</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1000px] bg-white">
              <DialogHeader>
                <DialogTitle>Create a Post</DialogTitle>
                <DialogDescription>Share something with your network</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 mt-4">
                <textarea
                  rows={6}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="w-full p-2 border bg-white rounded-md text-black resize-y"
                  placeholder="What do you want to talk about?"
                />
                {/* Media preview (optional) */}
                {selectedMedia && (
                  <img
                    src={selectedMedia}
                    alt="Selected Media"
                    className="max-h-[200px] w-auto rounded-lg border border-gray-200"
                  />
                )}
                <div className="flex flex-row gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Select Topic</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40">
                      <DropdownMenuLabel>Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => alert("Market clicked")}>
                        Market
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => alert("Socials clicked")}>
                        Socials
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {/* Add Media Button */}
                  <Button variant="outline" onClick={() => document.getElementById("mediaInput").click()}>
                    Add Media
                  </Button>
                  {/* Hidden file input */}
                  <input
                    id="mediaInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleMediaChange}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleCreatePost}>Post</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </Card>

      {/* Posts Feed Section */}
      <ScrollArea className="h-[calc(100vh-180px)] space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <SinglePost key={post.id} postData={post} />
          ))
        ) : (
          <>
            <p className="text-center text-gray-500">Add friends or create a new post to get started!</p>
          </>
        )}
      </ScrollArea>
    </div>
  );
}

export default MiddleColumn;

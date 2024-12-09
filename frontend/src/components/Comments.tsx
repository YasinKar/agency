import { useState } from 'react';
import { FaUser, FaHeart } from 'react-icons/fa';

interface Comment {
  id: number;
  username: string;
  body: string;
  likes: number;
  isLiked: boolean;
}

const mockComments: Comment[] = [
  { id: 1, username: 'Test 1', body: 'It Was really goooood!', likes: 5, isLiked: false },
  { id: 2, username: 'Test 2', body: 'Awli bod!', likes: 3, isLiked: false },
];

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState({ username: '', body: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.username && newComment.body) {
      const comment: Comment = {
        id: comments.length + 1,
        username: newComment.username,
        body: newComment.body,
        likes: 0,
        isLiked: false,
      };
      setComments([...comments, comment]);
      setNewComment({ username: '', body: '' });
    }
  };

  const handleLike = (id: number) => {
    setComments(comments.map(comment => 
      comment.id === id 
        ? { ...comment, likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1, isLiked: !comment.isLiked } 
        : comment
    ));
  };

  return (
    <div className="mt-12 bg-primary/80 lg:p-20 p-5 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-secondary">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="username" className="block text-text-primary mb-2">Username</label>
          <input
            type="text"
            id="username"
            value={newComment.username}
            onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
            className="w-full p-2 rounded-lg bg-primary text-text-primary border border-secondary/30"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-text-primary mb-2">Comment</label>
          <textarea
            id="comment"
            value={newComment.body}
            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
            className="w-full p-2 rounded-lg bg-primary text-text-primary border border-secondary/30"
            rows={3}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-special text-secondary py-2 px-4 rounded hover:bg-special/80 transition-colors">
          Submit Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-primary p-4 rounded">
            <div className="flex items-center mb-2">
              <FaUser className="text-secondary mr-2" />
              <span className="font-bold text-text-primary">{comment.username}</span>
            </div>
            <p className="text-text-primary mb-2">{comment.body}</p>
            <button
              onClick={() => handleLike(comment.id)}
              className={`flex items-center ${comment.isLiked ? 'text-special' : 'text-secondary'} hover:text-special/80 transition-colors`}
            >
              <FaHeart className="mr-1" />
              <span>{comment.likes}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

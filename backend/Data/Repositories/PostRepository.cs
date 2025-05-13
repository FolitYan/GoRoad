using Data.Entietes;
using Domain.Models;

namespace Data.Repositories
{
    public class PostRepository : IPostRepository
    {
        private readonly Context _context;
        public PostRepository(Context context)
        {
            _context = context;
        }

        public bool CreatePostAsync(Post post)
        {
            var user = _context.Accounts.Find(post.accountId); 
            if (user == null)
            {
                return false;
            }

            var newPost = new PostEntity
            {
                Id = Guid.NewGuid(),
               
                Description = post.Description,
                Photo = post.Photo,
                Location = post.Location,
                Like = 0,
                accountId = post.accountId, 
                account = user      
            };

            user.Posts ??= new List<PostEntity>();
            user.Posts.Add(newPost);
            _context.Posts.Add(newPost);

            _context.SaveChanges();
            return true;
        }

        //public bool DeletePostAsync(Post post) {

        public List<Post> GetAllPosts() 
        {
            var posts = _context.Posts
                .Select(p => new Post
                {
                    Id = p.Id,
                    Description = p.Description,
                    Photo = p.Photo,
                    Like = p.Like,
                    Location = p.Location,
                    accountId = p.accountId
                })
                .ToList();
            return posts;
        }

        public bool IsPostExist(string title, string description)  
        {
            var post = _context.Posts.FirstOrDefault(p => p.Description == description);
            if(post == null)
            {
                return false; 
            }
            return true;
        }
         
    }
}

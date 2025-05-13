using Domain.Models;

namespace Data.Repositories
{
    public interface IPostRepository
    {
        bool CreatePostAsync(Post post);
        List<Post> GetAllPosts();
        bool IsPostExist(string title, string description);
    }
}
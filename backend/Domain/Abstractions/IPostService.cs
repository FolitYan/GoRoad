
using Domain.Models;

namespace Aplications.Services
{
    public interface IPostService
    {
        bool AddNewPost(string title, string description, string photo, string geo, Guid _accountId);
        List<Post> GetAllPosts();

    }
}
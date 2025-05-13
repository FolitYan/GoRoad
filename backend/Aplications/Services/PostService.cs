using Data.Repositories;
using Domain.Models;
using Microsoft.Identity.Client;

namespace Aplications.Services
{
    public class PostService : IPostService
    {
        private readonly IPostRepository _postRepository;

        public PostService(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        public bool AddNewPost(string title, string description, string photo, string geo, Guid _accountId)
        {
            var post = new Post
            {
                Description = description,
                Photo = photo,
                Location = geo,
                accountId = _accountId
            };
            if (!_postRepository.IsPostExist(title, description))
            {
                var rez = _postRepository.CreatePostAsync(post);
                return rez;
            }
            return false;
        }

        public List<Post> GetAllPosts() 
        {
            return _postRepository.GetAllPosts();
        }
    }
}

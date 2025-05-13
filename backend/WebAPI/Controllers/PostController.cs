using Aplications.Contracts;
using Aplications.Services;
using Data;
using Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class PostController : ControllerBase
{
    private readonly IPostService _postServece;

    public PostController(IPostService postServece)
    {
        _postServece = postServece; 
    }

    [HttpPost("create")]
    [Authorize]
    public IActionResult CreatePost([FromBody] PostRequestAdd post)
    {
        var rez = _postServece.AddNewPost(post.Title, post.Description, post.Photo, post.Geo, post.accountId);
        return Ok(rez);
    }

    [HttpGet("getAll")]
    public IActionResult GetAllPosts() 
    {
        var posts = _postServece.GetAllPosts();
        return Ok(posts);
    }
}


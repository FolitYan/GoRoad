using Aplications.Contracts;
using Aplications.Services;
using Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
    private readonly IAccountService _accountServece;

    public AccountController(IAccountService accountServece)
    {
        _accountServece = accountServece;
    }

    [HttpPost("authorization")]
    public IActionResult AccountAuthorization([FromBody] AccountRequest request)
    {
        var (token, resoult) = _accountServece.Authentication(request.Login, request.Password);

        HttpContext.Response.Cookies.Append("chocolate-cookie", token);    

        return Ok(new
        {
            token = token,
            success = resoult
        });
    }


    [Authorize] 
    //[AllowAnonymous]
    [HttpPost("registration")]
    public IActionResult Registration([FromBody] AccountRequest request)
    {
        var (msg, resoult) = _accountServece.Registration(Guid.NewGuid(), request.Login, request.Password);

        return Ok(new
        {
            message = msg,
            success = resoult
        });
    }

    [Authorize]
    [HttpGet("getAllAccounts")]
    public IActionResult GetAllAccounts()
    {
        var result = _accountServece.GetAllAccounts();
        return Ok(result.Item1);
    }
}


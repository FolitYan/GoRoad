using Aplications.Contracts;
using Aplications.Services;
using Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

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
        var (token, rez, account) = _accountServece.Authentication(request.Login, request.Password);
        if (!rez)
        {
            return Ok(new { Success = false });

        }

        HttpContext.Response.Cookies.Append("chocolate-cookie", token);

        return Ok(new AccountAuthorizResponse(account[0].Id, account[0].Login, token, success: true));
    }

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

    [HttpGet("getAllAccounts")]
    public IActionResult GetAllAccounts()
    {
        var result = _accountServece.GetAllAccounts();
        return Ok(result.Item1);
    }

    [Authorize]
    [HttpGet("isAuthorize")]
    public IActionResult IsAuthorize()
    {
        var userId = User.FindFirst("acountId")?.Value;

            if (string.IsNullOrEmpty(userId))
            {
                return Ok(new { message = "Не удалось получить ID пользователя." });
            }

            return Ok(new { userId });
    }

}


using Aplications.Contracts;
using Aplications.Services;
using Applications.Services;
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
        var (token, success, account) = _accountServece.Authentication(request.Login, request.Password, HttpContext);
        if (!success)
        {
            return Ok(new { Success = false, message = token });
        }

        return Ok(new AccountAuthorizResponse(account[0].Id, account[0].Login, token, success: true));
    }

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
       return Ok();
    }

    [Authorize]
    [HttpGet("logout")]
    public IActionResult Logout()
    {
        _accountServece.LogOut(HttpContext);
        return Ok();
    }


}


using Aplications.Contracts;
using Aplications.Services;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class AccountAuthenticationController : ControllerBase
{
    private readonly IAccountServece _accountServece;

    public AccountAuthenticationController(IAccountServece accountServece)
    {
        _accountServece = accountServece;
    }

    [HttpPost]
    public IActionResult AccountAuthentication([FromBody] AccountRequest request)
    {
        return Ok();
    }

}


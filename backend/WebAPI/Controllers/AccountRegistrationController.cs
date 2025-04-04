﻿
using Aplications.Contracts;
using Aplications.Services;
using Microsoft.AspNetCore.Mvc;


[ApiController] 
[Route("[controller]")]
public class AccountRegistrationController : ControllerBase
{
    private readonly IAccountServece _accountServece;

    public AccountRegistrationController(IAccountServece accountServece)
    {
        _accountServece = accountServece;
    }

    [HttpPost]
    public IActionResult Register([FromBody] AccountRequest request)
    {
        var (msg,resoult) = _accountServece.Registration(Guid.NewGuid(), request.Login, request.Password);
        return Ok(new
        {
            message = msg,
            success = resoult
        });
    }
}

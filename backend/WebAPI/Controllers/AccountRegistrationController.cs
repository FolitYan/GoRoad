
using Aplications.Contracts;
using Aplications.Services;
using Microsoft.AspNetCore.Mvc;


[ApiController] 
[Route("[controller]")]
public class AccountRegistrationController : ControllerBase
{
    private IAccountServece _accountServece;

    public AccountRegistrationController(IAccountServece accountServece)
    {
        _accountServece = accountServece;
    }

    [HttpPost]
    public string Register([FromBody] AccountRequest request)
    {
        return _accountServece.Registration(Guid.NewGuid(), request.Login, request.Password);
    }


}

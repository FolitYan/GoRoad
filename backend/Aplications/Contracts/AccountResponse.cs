namespace Aplications.Contracts
{
    public record AccountAuthorizResponse( 
        Guid Id,
        string Login,
        string token,
        bool success
        );
}

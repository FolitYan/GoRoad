
namespace Aplications.Contracts
{
    public record PostRequestAdd(
        string Title,
        string Description,
        string Photo,
        string Geo,
        Guid accountId
        );
}

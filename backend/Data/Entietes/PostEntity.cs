namespace Data.Entietes
{
    public class PostEntity
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;

        public AccountEntity? account { get; set; }
        public Guid accountId { get; set; }
    }
}

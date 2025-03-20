namespace Data.Entietes
{
    public class AccountEntity
    {
        public Guid Id { get; set; }
        public string Login { get; set; } = string.Empty;
        public string Passward { get; set; } = string.Empty;
        public List<PostEntity>? Posts { get; set; }
    }
}

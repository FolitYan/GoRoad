namespace Domain.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public Account? account { get; set; }
        public Guid accountId { get; set; }

    }
}

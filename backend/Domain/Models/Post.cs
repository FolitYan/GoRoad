namespace Domain.Models
{
    public class Post
    {
        public Guid Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public string Photo { get; set; } = string.Empty;
        public int Like { get; set; } = 0;
        public string Location { get; set; } = string.Empty;
        public DateOnly Date { get; set; }

        public Guid accountId { get; set; }
        public Account? account { get; set; }

        public List<string> Tags { get; set; }
        public List<Comment>? Comments { get; set; }
    }
}

namespace Domain.Models
{
    public class Collection
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool Private { get; set; } = false;
        public List<Post>? Posts { get; set; }
        public string? PhotoUrl { get; set; }
    }
}

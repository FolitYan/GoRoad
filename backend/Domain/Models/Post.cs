using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Domain.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Photo {  get; set; } = string.Empty;
        public int Like { get; set; } = 0;
        public string Geo {  get; set; } = string.Empty;
        public Account? account { get; set; }
        public Guid accountId { get; set; }

    }

}

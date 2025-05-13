using Data.Entietes;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Configurations
{
    public class PostConfiguratuon : IEntityTypeConfiguration<PostEntity>
    {
        public void Configure(EntityTypeBuilder<PostEntity> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Description)
                .IsRequired();

           
            builder.HasOne(p => p.account)
                .WithMany(a => a.Posts)
                .HasForeignKey(p => p.accountId)
                .OnDelete(DeleteBehavior.Restrict); // Избегаем каскадного удаления

            
            builder.HasMany(p => p.Comments)
                .WithOne(c => c.Post)
                .HasForeignKey(c => c.PostId)
                .OnDelete(DeleteBehavior.Cascade); // Каскадное удаление можно оставить здесь
        }
    }
}

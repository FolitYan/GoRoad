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

            builder.Property(p => p.Title)
                .IsRequired();

            builder.Property(p => p.Description)
                .IsRequired();

            builder.HasOne(p => p.account)
                .WithMany(a => a.Posts) 
                .HasForeignKey(p => p.accountId) 
                .OnDelete(DeleteBehavior.Cascade); 
        }
    }
}

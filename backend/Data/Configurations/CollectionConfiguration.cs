using Data.Entietes;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Configurations
{
    public class CollectionConfiguration : IEntityTypeConfiguration<CollectionEntity>
    {
        public void Configure(EntityTypeBuilder<CollectionEntity> builder)
        {
            builder.HasKey(c => c.Id);

            builder.HasMany(c => c.Posts)
                .WithOne(p => p.Collections)
                .HasForeignKey(c => c.collectionId);
        }
    }
}

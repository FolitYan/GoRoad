using Data.Entietes;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Configurations
{
    public class AccountConfiguratuon : IEntityTypeConfiguration<AccountEntity>
    {
        public void Configure(EntityTypeBuilder<AccountEntity> builder)
        {
            builder.HasKey(a => a.Id);

            builder.Property(a => a.Login)
                .IsRequired();

            builder.Property(a => a.Passward)
                .IsRequired();

            builder.HasMany(a => a.Posts)
                .WithOne(p => p.account);
        }
    }
}

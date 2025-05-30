﻿// <auto-generated />
using System;
using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Data.Migrations
{
    [DbContext(typeof(Context))]
    [Migration("20250503171127_msg")]
    partial class msg
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Data.Entietes.AccountEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("About")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("AccountEntityId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Photo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Role")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("AccountEntityId");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("Data.Entietes.CollectionEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhotoUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Private")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Collections");
                });

            modelBuilder.Entity("Data.Entietes.CommentEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("AccountId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("PostId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.HasIndex("PostId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("Data.Entietes.PostEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateOnly>("Date")
                        .HasColumnType("date");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Like")
                        .HasColumnType("int");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Photo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.PrimitiveCollection<string>("Tags")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("accountId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("collectionId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("accountId");

                    b.HasIndex("collectionId");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("Data.Entietes.AccountEntity", b =>
                {
                    b.HasOne("Data.Entietes.AccountEntity", null)
                        .WithMany("Following")
                        .HasForeignKey("AccountEntityId");
                });

            modelBuilder.Entity("Data.Entietes.CommentEntity", b =>
                {
                    b.HasOne("Data.Entietes.AccountEntity", "Account")
                        .WithMany("Comments")
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Data.Entietes.PostEntity", "Post")
                        .WithMany("Comments")
                        .HasForeignKey("PostId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");

                    b.Navigation("Post");
                });

            modelBuilder.Entity("Data.Entietes.PostEntity", b =>
                {
                    b.HasOne("Data.Entietes.AccountEntity", "account")
                        .WithMany("Posts")
                        .HasForeignKey("accountId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Data.Entietes.CollectionEntity", "Collections")
                        .WithMany("Posts")
                        .HasForeignKey("collectionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Collections");

                    b.Navigation("account");
                });

            modelBuilder.Entity("Data.Entietes.AccountEntity", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("Following");

                    b.Navigation("Posts");
                });

            modelBuilder.Entity("Data.Entietes.CollectionEntity", b =>
                {
                    b.Navigation("Posts");
                });

            modelBuilder.Entity("Data.Entietes.PostEntity", b =>
                {
                    b.Navigation("Comments");
                });
#pragma warning restore 612, 618
        }
    }
}

using Aplications.Services;
using Data;
using Data.Repositories;
using Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using WebAPI;

var builder = WebApplication.CreateBuilder(args);
var Configuration = builder.Configuration;

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.Configure<JWTOptions>(Configuration.GetSection(nameof(JWTOptions)));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.WithOrigins("http://localhost:3000") // Явно указываем разрешенный origin
               .AllowAnyHeader()
               .AllowAnyMethod()
               .AllowCredentials(); // Разрешаем учетные данные
    });
});


builder.Services.AddApiAuthentication(
    Options.Create(Configuration.GetSection(nameof(JWTOptions)).Get<JWTOptions>())
);

builder.Services.AddAuthorization();

builder.Services.AddDbContext<Context>(options =>
    options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddScoped<IAccountRepository, AccountRepository>();
builder.Services.AddScoped<IAccountService, AccountService>();
builder.Services.AddScoped<IPostRepository, PostRepository>();
builder.Services.AddScoped<IPostService, PostService>();

builder.Services.AddScoped<IJWTProvider, JWTProvider>();



var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowAll");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();
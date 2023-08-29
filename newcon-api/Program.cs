using Microsoft.EntityFrameworkCore;
using newcon_api.Database;
using newcon_api.Repositories;
using newcon_api.Repositories.Interface;


namespace newcon_api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: "myPolicy", policy =>
                {
                    policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();
                });
            });
            builder.Services.AddEntityFrameworkSqlite()
                .AddDbContext<AttractionContext>(
                options => options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"))
            );
            builder.Services.AddScoped<IAttraction, AttractionRepository>();


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors("myPolicy");
            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
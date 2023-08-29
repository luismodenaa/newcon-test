using newcon_api.Models;
using Microsoft.EntityFrameworkCore;

namespace newcon_api.Database
{
    public class AttractionContext: DbContext
    {
        public AttractionContext(DbContextOptions<AttractionContext> options)
            : base(options)
        {}

        public DbSet<AttractionsModel> Attractions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlite(connectionString: "DataSource=app.db;Cache=Shared");

    }
}

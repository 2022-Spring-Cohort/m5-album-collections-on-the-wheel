using Microsoft.EntityFrameworkCore;
using template_csharp_album_collections.Models;


namespace template_csharp_album_collections
{

    public class ApplicationDbContext : DbContext
    {
        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Song> Songs { get; set; }

        const string CONNECTION_STRING = "Server=(localdb)\\mssqllocaldb; Database=AlbumsDB; Trusted_Connection=True";


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(CONNECTION_STRING).UseLazyLoadingProxies();

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //Artist
            modelBuilder.Entity<Artist>().HasData(new Artist
            {
                Id = 1,
                Name = "Kendrick Lamar",
                Genre = "Rap",
                Bio = "Kendrick Lamar is an American rapper and lyricist. He is a critically and commercially acclaimed artist who started his musical journey as a teenager. He began his career in music by recording mix tapes under the pseudonym K-Dot. His first musical contract was signed at the age of sixteen with record label Top Dawg Entertainment.",
                HeroImage = "/images/kendrick.jpg"
            });
            modelBuilder.Entity<Artist>().HasData(new Artist
            {
                Id = 2,
                Name = "Miley Cyrus",
                Genre = "Pop",
                Bio = "Miley Ray Cyrus is an American singer, songwriter, actress, and television personality. Known for her distinctive raspy voice, her music incorporates elements of varied styles and genres, including pop, country pop, hip hop, experimental, and rock. She has attained the most US Billboard 200 top-five albums in the 21st century by a female artist, with a total of thirteen entries",
                HeroImage = "/images/miley.jpg"
            });
            modelBuilder.Entity<Artist>().HasData(new Artist
            {
                Id = 3,
                Name = "The Weekend",
                Genre = "R&B",
                Bio = "Abel Makkonen Tesfaye, professionally known as 'The Weeknd' is a Canadian singer born February 16, 1990 in Toronto. Best known for his performances in his latest album 'Starboy' (2016), and numerous other productions including 'Kissland' (2013), Beauty Behind the Madness (2015) which included the mega-hit; 'The Hills', and House of Balloons, Thursday and Echoes of Silence.",
                HeroImage = "/images/theweekend.webp"
            });
            modelBuilder.Entity<Artist>().HasData(new Artist
            {
                Id = 4,
                Name = "Carrier Underwood",
                Genre = "Country",
                Bio = "Carrie Underwood was born on March 10, 1983 in Muskogee, Oklahoma, USA. She is known for Soul Surfer (2011), American Idol (2002) and The Chronicles of Narnia: The Voyage of the Dawn Treader (2010).",
                HeroImage = "https://townsquare.media/site/204/files/2019/11/Carrie-Underwood-Cries-Pretty.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"
            });
            modelBuilder.Entity<Artist>().HasData(new Artist
            {
                Id = 5,
                Name = "Pink Floyd",
                Genre = "Rock",
                Bio = "Pink Floyd is a progressive rock band formed in 1965 in Cambridge & London, England, active since 1965 through 1983 & 1987 to present. Group's main members are Syd Barrett, Roger Waters, David Gilmour, Nick Mason, Rick Wright. ",
                HeroImage = "https://th.bing.com/th/id/OIP.M5rS4qWkb6RfHK6LB5X_dAHaE8?pid=ImgDet&rs=1"
            });
            modelBuilder.Entity<Artist>().HasData(new Artist
            {
                Id = 6,
                Name = "Nicolás Jaar",
                Genre = "Electronic",
                Bio = "Nicolás Jaar is a Chilean-American composer and recording artist based in New York. Among his notable works are the albums Space Is Only Noise, Sirens, and Cenizas. He has also released two albums as one half of his band Darkside and two further albums under the alias Against All Logic.",
                HeroImage = "https://vinilogarage.cl/wp-content/uploads/2021/03/UGZV2SHRX5DLFK5V6SQ5MKHGSY.jpg"
            });

            //Album
            modelBuilder.Entity<Album>().HasData(new Album
            {   Id = 1,
                Title = "DAMN.",
                Image = "https://th.bing.com/th/id/OIP.QIo4l4lnGh-JcY5_x65DMgHaHa?pid=ImgDet&rs=1",
                ArtistId = 1,
                RecordLabel = "Aftermath"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 2,
                Title = "To Pimp a Butterfly",
                Image = "https://www.latercera.com/resizer/rIGTLbi8ie_DpkFAJRxkq5vI8W4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/L2EHWPGBSNA45DUPSXB2CHIYPU.jpg",
                ArtistId = 1,
                RecordLabel = "Aftermath"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 3,
                Title = "Good Kid, M.A.A.D. City",
                Image = "https://th.bing.com/th/id/OIP.IPKkOHP67lCEhUFeeeyhYwHaHa?pid=ImgDet&rs=1",
                ArtistId = 1,
                RecordLabel = "Aftermath"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 4,
                Title = "Section.80",
                Image = "https://images.complex.com/complex/images/c_fill,g_center,h_300,q_auto,w_600/fl_lossy,pg_1/nmbw4qiwlch9sla2tcpz/kendrick-lamar-section-80-album-cover",
                ArtistId = 1,
                RecordLabel = "Top Dawg Entertainment"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 5,
                Title = "untitled unmastered.",
                Image = "https://th.bing.com/th/id/R.48707a67ae5ea6e7d6704260536d477a?rik=DIWtz3R7GyygfQ&riu=http%3a%2f%2fimg.wennermedia.com%2fsocial%2frs-kendrick-lamar-untitled-unmastered-87205fdc-0504-4a57-858d-8d45151dcfb6.jpg&ehk=7tiuN1XFL9cfekR4Fs69ujMvkyuuZyaHIf1j3icB82g%3d&risl=&pid=ImgRaw&r=0",
                ArtistId = 1,
                RecordLabel = "Aftermath"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 6,
                Title = "Black Panther",
                Image = "https://th.bing.com/th/id/OIP.orohBwmwTTKsR-SA_lRjcAHaEP?pid=ImgDet&rs=1",
                ArtistId = 1,
                RecordLabel = "Interscope"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 7,
                Title = "Plastic Hearts",
                Image = "https://i.pinimg.com/originals/38/e0/6e/38e06ed03db63c6d75338a5a76b3135b.png",
                ArtistId = 2,
                RecordLabel = "RCA Records"

            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 8,
                Title = "Album",
                Image = "",
                ArtistId = 2,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 9,
                Title = "Album",
                Image = "",
                ArtistId = 2,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 10,
                Title = "Album",
                Image = "",
                ArtistId = 2,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 11,
                Title = "Album",
                Image = "",
                ArtistId = 2,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 12,
                Title = "Album",
                Image = "",
                ArtistId = 2,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 13,
                Title = "Album",
                Image = "https://m.media-amazon.com/images/I/81-blrK5yoL._SL1400_.jpg",
                ArtistId = 3,
                RecordLabel = "XO"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 14,
                Title = "Album",
                Image = "",
                ArtistId = 3,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 15,
                Title = "Album",
                Image = "",
                ArtistId = 3,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 16,
                Title = "Album",
                Image = "",
                ArtistId = 3,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 17,
                Title = "Album",
                Image = "",
                ArtistId = 3,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 18,
                Title = "Album",
                Image = "",
                ArtistId = 3,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 19,
                Title = "Album",
                Image = "",
                ArtistId = 4,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 20,
                Title = "Album",
                Image = "",
                ArtistId = 4,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 21,
                Title = "Album",
                Image = "",
                ArtistId = 4,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 22,
                Title = "Album",
                Image = "",
                ArtistId = 4,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 23,
                Title = "Album",
                Image = "",
                ArtistId = 4,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 24,
                Title = "Album",
                Image = "",
                ArtistId = 4,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 25,
                Title = "Album",
                Image = "",
                ArtistId = 5,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 26,
                Title = "Album",
                Image = "",
                ArtistId = 5,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 27,
                Title = "Album",
                Image = "",
                ArtistId = 5,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 28,
                Title = "Black Panther",
                Image = "",
                ArtistId = 5,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 29,
                Title = "Album",
                Image = "",
                ArtistId = 5,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 30,
                Title = "Album",
                Image = "",
                ArtistId = 5,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 31,
                Title = "Album",
                Image = "",
                ArtistId = 6,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 32,
                Title = "Album",
                Image = "",
                ArtistId = 6,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 33,
                Title = "Album",
                Image = "",
                ArtistId = 6,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 34,
                Title = "Album",
                Image = "",
                ArtistId = 6,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 35,
                Title = "Album",
                Image = "",
                ArtistId = 6,
                RecordLabel = "RecordLabel"
            });
            modelBuilder.Entity<Album>().HasData(new Album
            {
                Id = 36,
                Title = "Album",
                Image = "",
                ArtistId = 6,
                RecordLabel = "RecordLabel"
            });
            //Song
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 1,
                Title = "Loyalty ft. Rihanna",
                AlbumId = 1
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 2,
                Title = "Lust",
                AlbumId = 1
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 3,
                Title = "DNA",
                AlbumId = 1
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 4,
                Title = "Feel",
                AlbumId = 1
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 5,
                Title = "Blood",
                AlbumId = 1
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 6,
                Title = "The Climb",
                AlbumId = 2
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 7,
                Title = "We Can't Stop",
                AlbumId = 2
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 8,
                Title = "7 Things",
                AlbumId = 2
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 9,
                Title = "Start All Over",
                AlbumId = 2
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 10,
                Title = "Alright",
                AlbumId = 2
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 11,
                Title = "Prisoner (FEAT. DUA LIPA)",
                AlbumId = 2
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 12,
                Title = "Angels Like You",
                AlbumId = 2
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 13,
                Title = "The Morning",
                AlbumId = 3
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 14,
                Title = "Wicked Games",
                AlbumId = 3
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 16,
                Title = "Song",
                AlbumId = 3
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 17,
                Title = "Song",
                AlbumId = 3
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 18,
                Title = "Song",
                AlbumId = 3
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 19,
                Title = "Song",
                AlbumId = 3
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 20,
                Title = "Song",
                AlbumId = 3
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 21,
                Title = "Song",
                AlbumId = 3
            });
            modelBuilder.Entity<Song>().HasData(new Song
            {
                Id = 22,
                Title = "Song",
                AlbumId = 3
            });
            //Review
            modelBuilder.Entity<Review>().HasData(new Review
            {
                Id = 1,
                ReviewerName = "Miranda",
                Content = "My boyfriend fave album",             
                AlbumId = 1
            });
            modelBuilder.Entity<Review>().HasData(new Review
            {
                Id = 2,
                ReviewerName = "user05079786",
                Content = "I really wish she could do better",
                AlbumId = 7
            });
            modelBuilder.Entity<Review>().HasData(new Review
            {
                Id = 3,
                ReviewerName = "TheWeekandJunkie",
                Content = "Love him!Praying for him every night<3",
                AlbumId = 13
            });
            modelBuilder.Entity<Review>().HasData(new Review
            {
                Id = 4,
                ReviewerName = "Sammy",
                Content = "Not my type of music",
                AlbumId = 19
            });
            modelBuilder.Entity<Review>().HasData(new Review
            {
                Id = 25,
                ReviewerName = "Landon",
                Content = "Love it",
                AlbumId = 5
            });
            modelBuilder.Entity<Review>().HasData(new Review
            {
                Id = 31,
                ReviewerName = "user005955857",
                Content = "Listening in my car",
                AlbumId = 6
            });
            base.OnModelCreating(modelBuilder);

            

        }
    }
}

using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using template_csharp_album_collections.Models;
using System;

namespace template_csharp_album_collections.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArtistController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ArtistController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Artist> Get()
        {
            return _context.Artists.ToList();
        }

        [HttpGet("{id}")]
        public Artist Get(int id)
        {
            return _context.Artists.Find(id);
        }

        [HttpPost]
        public IEnumerable<Artist> Post(Artist artist)
        {
            try
            {
                _context.Artists.Add(artist);
                _context.SaveChanges();
                return _context.Artists.ToList();
            }

            catch (Exception e)
            {
                //error handling
                return _context.Artists.ToList();
            }
        }

        [HttpPut]
        public Artist Put(Artist artist)
        {
            artist.Albums = _context.Artists.Find(artist.Id).Albums;
            try
            {
                _context.Update(artist);
                _context.SaveChanges();
                return artist;
            }
            catch (Exception e)
            {
                return artist;
            }
        }

        [HttpDelete]
        public IEnumerable<Artist> Delete(int id)
        {
            var artistToDelete = _context.Artists.Find(id);
            _context.Artists.Remove(artistToDelete);
            _context.SaveChanges();

            return _context.Artists.ToList();
        }
    }
}

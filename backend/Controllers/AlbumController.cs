using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using template_csharp_album_collections.Models;

namespace template_csharp_album_collections.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AlbumController : ControllerBase
    {
        private ApplicationDbContext _context;

        public AlbumController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Album> Get()
        {
            return _context.Albums.ToList();

        }


        [HttpGet("{id}")]
        public Album Get(int id)
        {
            return _context.Albums.Find(id);
        }


        [HttpPost]
        public IEnumerable<Album> Post(Album album)
        {
            try
            {
                _context.Albums.Add(album);
                _context.SaveChanges();

                return _context.Albums.ToList();
            }
            catch (Exception e)
            {

                return _context.Albums.ToList();
            }

        }

        [HttpPut]
        public Album Put(Album album)
        {
            //Have to do this otherwise it tries to stick null into Songs and Reviews
            //Had an issue where it was breaking the relationships with artist and album
            Album albumToUpdate = _context.Albums.Find(album.Id);
            albumToUpdate.Title = album.Title;
            albumToUpdate.RecordLabel = album.RecordLabel;
            albumToUpdate.Image = album.Image;
            albumToUpdate.ArtistId = album.ArtistId;
            try
            {
                _context.Albums.Update(albumToUpdate);
                _context.SaveChanges();
                return _context.Albums.Find(album.Id);
            }
            catch (Exception e)
            {
                return _context.Albums.Find(album.Id);
            }
        }

        [HttpDelete("{id}")]
        public IEnumerable<Album> Delete(int id)
        {
            var albumToDelete = _context.Albums.Find(id);
            _context.Albums.Remove(albumToDelete);
            _context.SaveChanges();
            return _context.Albums.ToList();
        }
    }
}

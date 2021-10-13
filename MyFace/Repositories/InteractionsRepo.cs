using System;
using System.Data.Entity;
using System.Linq;
using MyFace.Models.Database;
using MyFace.Models.Request;

namespace MyFace.Repositories
{
    public interface IInteractionsRepo
    {
        Interaction GetById(int id);
        void Create(CreateInteractionRequestModel newInteraction, int postId);
    }
    
    public class InteractionsRepo : IInteractionsRepo
    {
        private readonly MyFaceDbContext _context;

        public InteractionsRepo(MyFaceDbContext context)
        {
            _context = context;
        }

        public Interaction GetById(int id)
        {
            return _context.Interactions.Include(i => i.User).Single(interaction => interaction.Id == id);
        }
        
        public void Create(CreateInteractionRequestModel newInteraction, int postId)
        {
            _context.Interactions.Add(new Interaction
            {
                Type = newInteraction.InteractionType,
                PostId = postId,
                UserId = newInteraction.UserId,
                Date = DateTime.Now,
            });
            _context.SaveChanges();
        }
    }
}
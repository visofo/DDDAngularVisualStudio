using Microsoft.EntityFrameworkCore;
using Sesc.Cultura.Domain.Interfaces;
using Sesc.Cultura.Domain.Models;
using Sesc.Cultura.Infra.Data.Context;

namespace Sesc.Cultura.Infra.Data.Repository
{
    public class OrdersRepository : Repository<Order>, IOrdersRepository
    {
        public OrdersRepository(DbContext context) : base(context)
        { }

        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
    }
}
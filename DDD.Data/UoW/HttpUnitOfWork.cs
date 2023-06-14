using Microsoft.AspNetCore.Http;
using Sesc.Cultura.Domain.Core;
using Sesc.Cultura.Infra.Data.Context;

namespace Sesc.Cultura.Infra.Data.UoW
{
    public class HttpUnitOfWork : UnitOfWork
    {
        public HttpUnitOfWork(ApplicationDbContext context, IHttpContextAccessor httpAccessor) : base(context)
        {
            context.CurrentUserId = httpAccessor.HttpContext?.User.FindFirst(ClaimConstants.Subject)?.Value?.Trim();
        }
    }
}
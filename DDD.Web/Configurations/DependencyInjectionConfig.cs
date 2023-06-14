using Microsoft.Extensions.DependencyInjection;
using Sesc.Cultura.Infra.CrossCutting.IoC;
using System;

namespace Sesc.Cultura.Web.Configurations
{
    public static class DependencyInjectionConfig
    {
        public static void AddDependencyInjectionConfiguration(this IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));

            NativeInjectorBootStrapper.RegisterServices(services);
        }
    }
}
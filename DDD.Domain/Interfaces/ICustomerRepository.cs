using Sesc.Cultura.Domain.Models;
using System.Collections.Generic;

namespace Sesc.Cultura.Domain.Interfaces
{
    public interface ICustomerRepository : IRepository<Customer>
    {
        IEnumerable<Customer> GetTopActiveCustomers(int count);

        IEnumerable<Customer> GetAllCustomersData();
    }
}
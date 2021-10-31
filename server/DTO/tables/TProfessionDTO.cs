using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
  public  class TProfessionDTO
    {
        public int ProfessionId { get; set; }
        public string ProfessionName { get; set; }
        public Nullable<int> SchoolId { get; set; }
    }
}

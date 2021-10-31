using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
    class TDocumentTypeDTO
    {
        public int DocumentTypeId { get; set; }
        public string DocumentTypeName { get; set; }
        public Nullable<int> ProfessionId { get; set; }
    }
}

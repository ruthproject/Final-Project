using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
    class TDocumentDTO
    {
        public int DocumentId { get; set; }
        public Nullable<int> DocumentTypeId { get; set; }
        public Nullable<int> ProjectId { get; set; }
        public Nullable<System.DateTime> DateSubmission { get; set; }
        public Nullable<bool> IsApprove { get; set; }

    }
}

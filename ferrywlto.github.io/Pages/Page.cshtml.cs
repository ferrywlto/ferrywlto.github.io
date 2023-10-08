using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ferrywlto.github.io;

public class Page : PageModel
{
    [FromRoute]
    public string Slug { get; set; }
}
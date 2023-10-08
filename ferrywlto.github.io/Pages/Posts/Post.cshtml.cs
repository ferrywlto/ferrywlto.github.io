using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ferrywlto.github.io.Pages.Posts;

public class PostModel : PageModel
{
    [FromRoute]
    public string? Slug { get; set; }
}

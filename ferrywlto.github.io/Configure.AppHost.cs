[assembly: HostingStartup(typeof(ferrywlto.github.io.AppHost))]

namespace ferrywlto.github.io;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => {
            // Configure ASP.NET Core IOC Dependencies
        });

    public AppHost() : base("ferrywlto.github.io", typeof(MyServices).Assembly) {}

    public override void Configure(Funq.Container container)
    {
    }
}

public class Hello : IReturn<StringResponse> {}
public class MyServices : Service
{
    public object Any(Hello request) => new StringResponse { Result = $"Hello, World!" };
}

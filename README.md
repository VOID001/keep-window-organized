# Build

```
mkdir pkg
cp -r code/ pkg/contents/
cp metadata.desktop pkg/
7z a -tzip keep-window-organized.kwinscript pkg
```

# Installation

`plasmapkg2 -i /path/to/your/keep-window-organized.kwinscript`

Alternatively, you can also download the kwinscript package here

# Debug

If you want to see the debug logging, run the following command:

```
dbus-monitor "type='signal',interface='org.kde.kwin.Scripting'"
```


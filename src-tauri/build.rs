use tauri_build::{try_build, Attributes, WindowsAttributes};
fn main() {
    // tauri_build::build()
    if let Err(error) = try_build(
        Attributes::new()
            .windows_attributes(WindowsAttributes::new().window_icon_path("res/icon.ico")),
    ) {
        panic!("Error: {}", error);
    }
}

# Microcontroller firmware via LLM (Arduino, ESP32, RP2040, STM32)

## What it is

LLMs (Claude, GPT, Gemini) inside Cursor, Claude Code, or PlatformIO writing firmware sketches for hobbyist microcontrollers. The 2026 unlock is not just code generation: agentic loops with shell access can compile, flash, read serial output, and iterate without the human in the loop.

## Specific unlocks

- "Write an ESP32 Arduino sketch that reads a DHT22 temperature/humidity sensor on GPIO 4, posts to MQTT broker at 192.168.1.50, and goes into deep sleep for 5 minutes between reads." First-shot working code is now common for this class of task.
- Adafruit blog (March 2025): Claude Code with shell access drives a Metro Mini board with an OPT4048 color sensor end-to-end, including upload and serial readback. Human only intervenes when oscilloscope readings are needed.
- MCP server for MicroPython (April 2026): Claude Desktop, Codex, Copilot, or Antigravity can directly execute code on a board over USB serial or WebREPL. Edit-flash-test loop measured in seconds.
- Cursor Community guide (still actively updated through 2026): ESP32 + PlatformIO setup, with `.cursorrules` files that pin the board variant and library set.
- ESP-Claw / OpenClaw: experiments with LLM-as-firmware-developer, autonomously hardware-bringing-up a new sensor without human babysitting.
- "Top 7 Claude Skills for Embedded Systems Engineers" (Snyk, 2025) covers Arduino/embedded C++ patterns for common peripherals.
- Claude Code skills repo `esp32-arduino-development` (EricSun787) provides Arduino-CLI based workflow without the Arduino IDE.

## Concrete weird unlocks

- Solo hobbyist builds a working soil-moisture sensor + watering pump system over a weekend with no prior C++ experience. The LLM picks the sensor library, writes the ISR for the pump driver, handles the Wi-Fi reconnect logic, generates the Home Assistant MQTT discovery payload.
- LLM debugs garbled serial output by hypothesizing baud-rate mismatch, regenerating the sketch with the matching `Serial.begin()`, and re-flashing all autonomously.
- Claude given a datasheet PDF for an obscure I2C sensor produces a working driver in Arduino C++ in one shot.

## Pre-AI baseline

Firmware bring-up on a new sensor was 1-2 days for an experienced developer: read datasheet, pick library or write driver, debug timing, handle edge cases. Beginners often hit weeks of stalled progress on issues like floating GPIO pins, ground loops, library conflicts, and toolchain setup.

## Hardware / cost

- ESP32 dev board: $4-$10 (WROOM, S3, C3, C5).
- Raspberry Pi Pico 2 (RP2350): $5.
- STM32 Nucleo: $10-$25.
- USB-C cable, breadboard, jumpers: $20.
- Cursor: $20/mo. Claude Code: $20/mo subscription or API.
- PlatformIO: free.

## Maturity

Production for prototype/hobby. The agentic flash-and-test loop is bleeding edge but works on common boards. Issues:
- Arduino library API churn confuses LLMs with stale training data.
- LLMs invent register names on obscure MCUs.
- Power management, low-noise analog, RF tuning still need human review.

## Sources

- https://forum.cursor.com/t/coding-your-esp32-firmware-with-cursor-or-vscode-platformio/100524
- https://blog.adafruit.com/2025/03/09/fully-automating-arduino-development-giving-claude-code-access-to-hardware/
- https://blog.adafruit.com/2026/04/15/an-mcp-server-for-micropython
- https://snyk.io/articles/claude-skills-embedded-systems-engineers/
- https://github.com/EricSun787/esp32-arduino-development
- https://blog.adafruit.com/2026/02/04/before-you-run-openclaw-on-anything-try-a-raspberry-pi-first-sensors-openclaw/

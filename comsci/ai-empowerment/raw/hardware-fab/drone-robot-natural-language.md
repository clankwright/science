# Drones and robots controlled by natural language (ROS-LLM, Spot, Skydio)

## What it is

Robotics traditionally needed C++/Python on top of ROS, plus state-machine programming, plus motion planning. The 2024-2026 shift: an LLM sits between the operator and the robot SDK, translating English to ROS service calls or vendor SDK commands. Boston Dynamics + Gemini Robotics is the highest-profile case; ROS-LLM (Auromix) and OperateLLM are the open-source equivalents.

## Specific unlocks

### Boston Dynamics Spot + Gemini Robotics

- 2025 hackathon and 2026 demos: developers interact with Gemini Robotics in conversational language. The LLM has access to Spot's autonomy SDK, a map of the site with 1-line location descriptions, and Spot's TTS.
- Original (2023) ChatGPT-on-Spot trick prompted the LLM as if it were writing the next line of a Python script; the harness eval'd output as Python. This pattern persists.
- Gemini Robotics (2026) brings embodied AI reasoning to inspection robots, enabling more sophisticated autonomous reasoning (multi-step task decomposition) without scripted state machines.

### ROS-LLM frameworks

- ROS-LLM (Auromix, GitHub): drop-in framework for ROS that lets non-experts control robots with natural language and learn skills from demonstrations and feedback. ~10 minutes from clone to working voice control.
- Nature Machine Intelligence (2026) paper formalizes ROS-LLM with task feedback and structured reasoning.
- OperateLLM: ROS 2 tools surfaced to LLMs via tool-use protocols.
- TechXplore (March 2026) and OpenSourceForU (April 2026) cover the framework's natural-control demos.

### Skydio (enterprise drone with API)

- Skydio Developer Tools and SDKs expose mission planning, waypoint flight, telemetry, and dock management on X10/X10D/X2/S2+ via documented APIs and ICDs.
- Drag-and-drop GPS waypoints in the app; the API lets third-party apps plan and trigger missions.
- LLM front-end that takes "fly the perimeter of the warehouse and stop at every door" and emits a Skydio mission plan is a straightforward integration but isn't a Skydio first-party feature. Hobbyist access is limited; Skydio is mostly enterprise/public-safety.

### Search-and-rescue volunteer use

- LLM-augmented mission planning is being prototyped for SAR. Operator describes the search pattern; the system emits waypoints, role assignments, and comms scripts. Dynamic and unknown environments where traditional planning fails are the obvious target (offshore, mining, disaster).

## Concrete weird unlocks

- "Spot, walk to the electrical room, point the camera at the breaker panel, take a photo, then come back" runs without writing a single line of code.
- Volunteer SAR coordinator without aviation experience plans a multi-drone search grid by talking to a chat interface, which generates the per-drone waypoint files and pre-flight checklists.
- Hobbyist with a TurtleBot4 and ROS2 talks to it: "patrol the kitchen, alert me if you see the cat on the counter" - the LLM wires a vision model into the navigation stack.

## Pre-AI baseline

Programming an autonomous behavior on Spot: weeks of SDK training, state-machine design, simulation testing. ROS2 had a steep learning curve (URDF, transforms, action servers). SAR mission planning was paper-based or in dedicated GIS tools that took hours to learn.

## Hardware / cost

- Spot: $74,500 base. Out of hobbyist range.
- Skydio X10: $14,000+. Enterprise.
- TurtleBot4 Lite: $1,650. Reasonable for a robotics enthusiast.
- DJI Tello (hobbyist): $99, has an open SDK that works fine with LLM scripting for indoor missions.
- ROS-LLM stack: free, runs on a laptop.

## Maturity

Research to early production. Spot + Gemini is research demos and inspection deployments. ROS-LLM is open-source with active community use. SAR LLM tooling is volunteer-grade prototype, not certified.

## Sources

- https://bostondynamics.com/blog/tools-for-your-to-do-list-with-spot-and-gemini-robotics/
- https://bostondynamics.com/blog/robots-that-can-chat/
- https://spectrum.ieee.org/boston-dynamics-spot-google-deepmind
- https://github.com/Auromix/ROS-LLM
- https://www.nature.com/articles/s42256-026-01186-z
- https://techxplore.com/news/2026-03-combining-robot-llms-natural-language.html
- https://www.opensourceforu.com/2026/04/ros-llm-link-enables-natural-control/
- https://www.skydio.com/developer-tools
- https://github.com/jrin771/Everything-LLMs-And-Robotics

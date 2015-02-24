---
title: What is a computer system?
files: []
layout: 2-panels-tree

---
Most of you understand what a computer system is already. You may be surprised at how many household devices are computer systems or contains computer systems. In a moment, we'll list some of them our for you, including Alarm Clocks, Washing Machines, Phones and Cameras.


## The 4 main components of a computer system
Any computer system is made up of 4 main components

- **Input** : information and data from components or devices provided to the computer system
- **Output** : information provided by the computer system to other devices and components
- **Store** : Computer systems need to store data so it can be processed. This includes memory, disk drives and other forms of storage.
- **Processing** : This generally means the CPU (or processor), which is the brain of the computer system. It involves running programs as well as coordinating the flow of information between input devices, output devices and storage.

|||info
The above 4 component system is known as the Von Neumann acrchitecture.
Let's take a look at typical examples of the 4 components of a computer system.
|||


---
title: Input Devices
files: []

---
Take a look at the following input devices and you should get a clear idea about what an input device is.

|||info
An input device is a peripheral (piece of computer hardware equipment) used to provide data and control signals to an information processing system such as a computer or other information appliance.
|||

|||image-table

### Input Devices 

![](.guides/img/devices_input2.png)
|||



---
title: Output devices
files: []

---
|||info
An output device is any piece of computer hardware equipment used to communicate the results of data processing carried out by an information processing system (such as a computer) into human-understandable form.
|||

|||image-table
### Output Devices 

![](.guides/img/devices_output.png)
|||

---
title: Store
files: []

---
There are two main types of stores. We'll disucss these storage types in more detail in a later section.

## Primary Storage - Memory

|||image
![](.guides/img/04_store_photo_ram.jpg)

Primary Storage - Memory
|||

Primary storage (or main memory or internal memory), often referred to simply as memory, is the only one directly accessible to the CPU. The CPU continuously reads instructions stored there and executes them as required. RAM and ROM are the most common examples.|

## Secondary Storage - Memory


|||image
![](.guides/img/04_store_photo_secondary.png) 

Secondary Storage - Memory
|||

Secondary storage (also known as external memory or auxiliary storage), differs from primary storage in that it is not directly accessible by the CPU. A hard drives is the most common example although you can see there are many others. Secondary storage is most often *non-volatile* which means it retains information when the power is switched off.|


---
title: Storage Types
files: []

---
Here is a table of household devices and a few of the components they might have.

<iframe src="https://imitate-critic.preview-test1.codiodev.com/.guides/hack.html" width="559px" height="1200px" style="border:none"></iframe>


Other example computer systems include

- Air traffic control systems
- Pacemakers
- Hospital medical equipment
- Traffic management systems
- In flight avionics control systems

So you can see that as well as your beloved personal gadgets there are computer systems that are truly important to many aspects of modern society that we probably don't even think about.

---
title: Hardware reliability
files: []

---
Reliability is a big issue when designing computer systems. 

If hardware fails then it is realtively easy to imagine how the system as a whole can fail. 

| Failure | Effect | Solution |
|-|-|-|
| Computer power supply blows | Computer shuts down completely | *Redundant power supply* means the computer has 2 power supplies built in so if one fails, the other still operates while the broken one is replaced |
| Server Disk drive crashes | All data on that drive is lost | File servers have several disks with data spread across them so if one fails, the others contain the same data allowing the faulty one to be replaced after which the data is restored. This is known as a RAID disk array |
| Aircraft avionics system failure | Plane could crash | Modern planes have *triple redundant systems* meaning there are 3 entirely separate control systems located in different physical locations to reduce likelihood of all 3 failing |

---
title: Software reliability
files: []

---
If software fails then the effect can vary. 

| System Type | Seriousness | Description |
|-|-|-|
| IMG Pacemaker | Faintness or even death | If the software would fail, then either pacemaker would stop completely or it could send out pulses to stimulate the heart and an irregular or even  very fast rate, neither of which are comfortable |
| IMG Traffic | Traffic jams or even death | Traffic lights fail to operate correctly resulting in chaos or accidents. |
| IMG Gaming | Annoying | You are about to achieve your high score when the game crashes or freezes. Your life is temporarily ruined. |
| IMG Word processor | Lost work | You have been editing a document for 2 hours without saving then it crashes. You have lost 2 hours of work. Other than testing, adding an auto-save feature can prevent this, which modern word-processors all have. |

## Testing
Software engineers spend a lot of time writing code with reliability in mind. The table below shows the various ways software development teams look to enhance reliability through testing.

| Method | Description |
|-|-|
| Unit Tests | All good developers incorporate unit tests into their development process. A unit test is code that simulates all possible or known scenarios for a discreet bit of functionality. A software program can have hundreds or thousands of these even. The developer then runs alls the tests to ensure that all test pass successfully. Any failures are higlighted. |
| User Tests | Software teams include *Quality Assurance* staff, whose job it is to follow *test plans* that tell teh QA person what to do. They can then check that everything looks right and behaves right, which unit tests often cannot do. |
| Emulations | If you are testing an in-flight control system, testing at 30'000 feet is not a great idea as any failures can result in death. An emulation allows the developers to emulate a real in-flight situation from the comfort of their desks. Only then does the software get tested in flight. |


---
title: Standards
files: []

---
Nowadays, when you buy a keyboard or a mouse, you can be pretty sure that when you plug it in to a PC or Mac, it is going to work.

Not so long ago, however, you had to know exactly what you were buying and whether it was compatible with your computer. This was annoying for both buyers and sellers of computer equipment.

The same thing applies to computer software. Document standards such as PDF, audio standards such as MP3, video standards such as MP4 are all crucial in ensuring that information can be exchanged between systems.

In the next sections, we'll look at some examples of hardware and software standards.


---
title: Hardware standards
files: []

---
The following table shows some well known hardware standards.

| Standard | Description |
|-|-|
| USB [image] | Allows you to connect things like printers, keyboards, mice, cameras, microphones and many other peripheral devices. |
| Bluetooth | Wirelessly connect smartphones, mice, keyboards and other devices |
| RAID | Connect two or more hard disks together so that if one disk drive fails, the other drive(s) have the same data spread across them so if one fails, you don't lose data |
| DDR SDRAM | This is a standard for RAM memory chips that allows different chip manufacturers to built RAM chips that will work in different computers. If this standard did not exists, then you could only buy RAM from one manufacturer. |
| HDMI | You will probably have a couple of HDMI cables in your house. You connect your gaming console and your satellite or cable console to your TV. TV manufacturers all make use of the HDMI standard to ensure that their TVs will work with other devices happily. |




---
title: Software standards
files: []

---
The following table lists some well-known software standards.

| Standard | Description |
|-|-|
| IMG PDF | Allows any document (text, spreadsheet, image, web-page etc.) to be distributed to anyone with a PDF reader. All modern computers, tablets and iPhones have PDF readers preinstalled. |
| IMG ASCII | This is an old standard that specified how computer characters are represented internally For example, A=65, B=66, 1=49, 2=50. The word 'CAT' is stored in a computer as the number sequence 67, 65, 84. This is how data messages can be reliably sent between systems of any type and reliably understood. |
| IMG MP3 | This is well known standard for compressing and storing digital audio. |
| IMG MP4 | A common standard for compressing and storing video |


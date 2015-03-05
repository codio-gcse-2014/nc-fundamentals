Reliability is a big issue when designing computer systems. 

If hardware fails then it is realtively easy to imagine how the system as a whole can fail. 

| Failure | Effect | Solution |
|-|-|-|
| Computer power supply blows | Computer shuts down completely | *Redundant power supply* means the computer has 2 power supplies built in so if one fails, the other still operates while the broken one is replaced |
| Server Disk drive crashes | All data on that drive is lost | File servers have several disks with data spread across them so if one fails, the others contain the same data allowing the faulty one to be replaced after which the data is restored. This is known as a RAID disk array |
| Aircraft avionics system failure | Plane could crash | Modern planes have *triple redundant systems* meaning there are 3 entirely separate control systems located in different physical locations to reduce likelihood of all 3 failing |

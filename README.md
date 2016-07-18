# DanyBurtonHomeComputer
A Javascript virtual machine that I can put in my website.
It's IO will consist of mouse, screen, keyboard, saving data to the user's computer which will be treated like a hard drive, and also character data can be posted to the page which will be mapped to memory too.

In order to not force the VM to constantly check for writes to the hard drive, I think I will add a special write to hard drive instruction or something.


## registers
A register is used to address memory and has to either be set through a calculation or a two instruction setting process.
C register is used to store the output of calculations and stuff.
O register stores the memory offset of the currently running program so that it's jumps still work. it is only 8 bits wide,
and so every offset is a multiple of 256 words.
S register is a stack that you can put stuff on if you so desire. It's main purpose is so you can put your A and O
registers on it before jumping to system calls so it knows where to send you back to.


## Instructions
The instruction set will mostly be a rip off of the machine from Nand2Tetris. People are allowed to do that with
processors, so I think I'm ok doing that here.

Ok so there are two types of instructions:
SET instructions start with a 0, and there are then 5 different types of them:
- 00000000 instructions set the first byte of the value to store in the A register
- 00000001 instructions set the second byte of the value in the A register
- 00000011 instructions set the value of the O register
- 00001aco push register denoted by bits to stack. only one register per instruction allowed
- 00011aco pop register denoted by bits to stack. only one register per instruction allowed
- 01 instructions write the value in the A register to the contained hard drive address. (so the hard drive can only contain 2^14 words. Although this could be expanded through some kind of memory mapped thingo).

D instructions start with a 1, and then they pretty much follow the same formula:
1ccccccddddjjjl
c are the computation bits which represent the computation to be performed.
the d bits determine where the value will be stored, allowing any combination of A register, D register, memory[A + offset], and memory[A]
the j bits say under what conditions the program jumps to the memory location contained in the A register, with the conditions being if the computed value is less than 0, 0, or greater than 0.
the l bit says whether or not to offset the jump by the O register.

## Memory Mapped IO
The Dany Burton Home Computer will have the following IO devices:
- 160 x 96 8 bit colour screen. occupying the last 30 256 word blocks in memory.
- one block of data posted to the page.
- one block containing a stack of keyboard events.
- one block where the first word is current mouse movement, and then the rest is a stack of mouse click events.


## Startup
first a bootloader type thing will run which first checks if the user has a hard drive file, and if they don't it will
send them the latest disk image I have made.
Then it loads the first 256 words from the hard drive into the start of memory and then the computer begins to execute
normally.

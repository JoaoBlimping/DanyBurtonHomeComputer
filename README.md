# Dany Burton Home Computer
A 16-bit virtual machine for messing around with, which I would like to eventually have periferals
that work with internet stuff after porting it to the web. It will also have 512x256 8-bit screen
and keyboard and mouse support. Maybe also make the colour palette programmable. All the IO stuff
will be memory mapped. The amount of memory mappable is 2^23, since there is an 8 bit offset
register, and then 16 bit mapping at every offset. There are 16 registers, 13 of which are general
purpose, with r[13] being the offset register, r[14] being the program counter, and r[15] being the
maths flags one.

# Instructions
 - ADD a b c   - 0000aaaabbbbcccc - r[c] = r[a] + r[b]
 - DIV a b c   - 0001aaaabbbbcccc - r[c] = r[a] / r[b]
 - MOD a b c   - 0010aaaabbbbcccc - r[c] = r[a] mod r[b]
 - MEMCPY a b  - 0100aaaabbbb1000 - m[r[a]] = r[b]
 - MEMSUC a b  - 0100aaaabbbb0100 - r[a] = m[r[b]]
 - MEMSWAP a b - 0100aaaabbbb1100 - m[r[a]] = r[b] and r[a] = m[r[b]]
 - MOV a b     - 1000aaaabbbbbbbb - r[a] = b
 - CPY a b     - 1111aaaabbbb0000 - r[a] = r[b]
 - CPYL a b    - 1100aaaabbbbcccc - r[a] = r[b] if r[c] is less than 0
 - CPYLE a b   - 1110aaaabbbbcccc - r[a] = r[c] if r[c] is less than or equal to 0
 - CPYE a b    - 1010aaaabbbbcccc - r[a] = r[c] if r[c] is equal to 0
 - CPYGE a b   - 1011aaaabbbbcccc - r[a] = r[c] if r[c] is greater than or equal to 0
 - CPYG a b    - 1001aaaabbbbcccc - r[a] = r[c] if r[c] is greater than 0




int total = 0;
for (int i = 1;i < 10;i++) total += i;


#define TOTAL 0
#define I 1
#define ONE 2
#define PROGRAM_COUNTER 14

MOV TOTAL 0
MOV I 0
MOV ONE 1
loop:
  ADD I ONE I
  ADD TOTAL I TOTAL
  MOV PROGRAM_COUNTER loop

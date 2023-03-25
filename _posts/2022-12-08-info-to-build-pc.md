---
title: "What I have learnt after building my own PC"
header:
categories:
  - tips
tags:
  - build-pc  
  - information
---

I have built my PC and learnt some information that I want to put here. I could be wrong so please research each point on your own before using it.

# Why I built PC (instead of buying a pre-built)

I like the incredible feeling of research and assembly-by-hand process.

I treated this as a pleasure activity and really did not want it to end.

Later in the research phase, I also found out that **with pre-built PCs, they had many disadvantages over custom built ones.**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. the way they engineer the cooler/air flow is often not good.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. the parts are fixed and hard to choose one with specific parts.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. they are built with proprietary parts - it means parts are designed for a specific use case and could not be replaced or upgraded on my own.

# You have to know the use case of your future PC

“What will the PC be used for?”

From the answer of the question, you can find out which components you need to use. Otherwise, it is very easy to go over budget for exceeding capacity.

## For example: Mine use case

The PC is for web and phone development so occasionally I need to use a virtual machine or emulator and iGPU is fine. I also need a bit of SSD space for my music collection to listen to while working. I also need wifi and bluetooth.

I use mostly Linux so I need to check for part support/ driver.

Other than those, I like a small and good airflow case, so mATX is my choice.

With that need, my build focused on an average CPU with onboard iGPU (not a dedicated GPU), mATX mother-boards that have wifi, more Ram, a little bigger SSD, a good PSU in case I need to install a GPU. 

Then, A good mATX case to fit all of those components and a tower air cooler (because of medium power CPU) that can fit that case and the ram that can go with that cooler. Also, the size of the PSU that can fit in that case (or vice versa, a case that can fit my chosen PSU and cooler).

# Choosing parts:
## 1. CPU
AMD vs Intel: Price-Performance Ratio in any category will determine the choice. 

CPUs always come with a combo of motherboard lines. A specific cheaper Intel cpu might come with a more expensive motherboard then a higher price AMD but can be coupled with a cheaper motherboard, given they have similar performance.

I was tempted to go with AMD but after research, Intel i5-12400 is without E-core, quite cheaper than a AMD counterpart (Ryzen 5600) and more powerful than I need.

I chose an Intel CPU with DDR4 mainboard, so some of my experiences were limited by this choice.

## 2. CPU cooler
This needs to be researched on your own. With my 12400 Intel, I chose ID cooling SE 214.

I can use a quite low end air cooler because the 12400 runs cool. With a hotter CPU, you might need to consider a higher end air cooler or liquid cooler. Air cooler is heavier and bigger but easier to maintain, also cheaper than a liquid one (AIO). 

Just remember, the clearance of the cooler affects the ram and the case. The bottom is too low, you cannot install some tall rams/ or normal rams (need lower profile ram). The height exceeds your case support, you cannot close the side panel.

## 3. Motherboard

You need to choose the right socket, good VRM, and the IOs (the ports that you can plug usb, lan cable, headphones...) you want to use. 

VRM (Voltage Regulation Modulator) is for controlling the voltage (V) sent to CPU and other components in order to regulate the voltage as consistently and steady as possible. It takes the juice from the power supply unit and regulates it to the appropriate ones (DC to DC). A power hungry CPU need good VRM.

My MSI B660 mortar motherboard coupled with i5-12400 in theory could overclock ram. However a locked CPU could not be increased the voltage of VCCSA, so the combo could not run high frequency ram on Gear1. To put it simpler, **a locked CPU will hinder your ram overclock ability, even if you buy a good motherboard.**

## 4. Ram

The clearance of ram with CPU cooler should be taken into account. Some ram is tall and some cooler clearance is low.

The ram frequency your PC can run is dependent on the mainboard and the memory controller of the CPU (both motherboard and CPU are important!). The role of the mainboard in this case is for voltage supply and frequency support; the CPU memory controller is for controlling the ram at that frequency. So, if you want to run your ram above 3200mhz, choose your Mainboard, and CPU carefully (beside choosing a good ram).

XMP is an extreme profile for ram overclocked and the ram might run on 1.35 V as opposed to 1.2 V (normal ddr 4 voltage).

**2 rams is easier to XMP than 4 rams** because it puts less pressure on the memory controller on the CPU.

For example, Intel recommends Alder Lake with 3200 mhz ram and this is easy by just turning on XMP in bios. However, if you want to run the ram above that speed, it is totally fine but you need to overclock it on your own. 

The bible for overclock ram can be found here: [DDR4 OC Guide.](https://github.com/integralfx/MemTestHelper/blob/oc-guide/DDR4%20OC%20Guide.md).

## 5. PSU

Choosing a tier-A gold PSU or above is the rule of thumb. Not only will it be more efficient but it will also be made of better components than the lower tier ones. (You should search for "PSU tier list").

The wattage will depend on the components; just remember, the wattage on the PSU is the maximum output it can give. 

For example, a 650W will take as much as AC current it needs to output as much as the wattage the computer needs and it will be limited at 650W. The gold rate 80% is that 100% AC power only can convert to 80% DC efficiency.

# 6. Case

Choosing a case will depend on the size of the motherboard, the clearance of dedicated GPU, PSU, cooler. Take all of them into account!

## 7. Fan case

Noise and connection are what to be aware of here. Good fan and lower speed will be good, as well as good connections and/ or fan hub.

The best is daisy chain PWM (Pulse-width modulation) fans. It is controllable by motherboard and you can manually set their curve speed graph in bios. The curve graph is defined as “at which temperature, which fan speed is used”. This helps with the noise a lot! Still need a fan hub if many fans are used. The daisy chain will save connection from fans to the motherboard.

The slightly lower option is PWM without a daisy chain. Need a fan hub if many fans are used.

The even lower option is the DC fan, which is controlled by the motherboard by voltage. Need a fan hub if many fans are used.

The worst option is to use molex case fans, which can be chained together with the last (in the chain) plugged directly to the supplier, they will always run at max speed. If you are on a budget, they are fine for the purpose though.

## TIPs
After I had a general idea of which part to pick. I tried a search like "AMD 5600g built reddit" or "Intel 12400 built reddit". There were people also who had gathered parts and asked questions about their builds and a lot of advice to reference. 

I ask on reddit directly, two kind users gave me advice that drastically decreases my budget without compromising, allowing me to put the money for better ram, PSU and SSD and even pointed me to a more suitable case for my build.

[https://pcpartpicker.com/](https://pcpartpicker.com/)  is a awesome website that lets people check for compatibility and calculate total max wattage.

# How to install

You need to watch some tutorials to see how those components are assembled. I will just give you some important points you need to be aware of.

## Case fan, air intake and exhaust. 

You should install fans so that they push fresh air from the front and exhaust hot air from the back. This air direction in your case is very important. 

My advice is to aim for a good air flow. 

## Install the mainboard into the case
Cases are often built to fit multiple size mainboards, so some standoffs need to be removed. See how many standoffs needed and leave only used standoffs, to migrate the risk of electricity shortage.

**Hope the information here helps you!**




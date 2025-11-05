import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, Circle, FancyArrowPatch, Rectangle, Polygon
from matplotlib.patches import ConnectionPatch, Wedge
import matplotlib.lines as mlines
import numpy as np

# Set up the figure with high DPI for 4K clarity
fig, ax = plt.subplots(figsize=(16, 20), dpi=300)
ax.set_xlim(0, 100)
ax.set_ylim(0, 130)
ax.axis('off')
fig.patch.set_facecolor('#FAFAFA')
ax.set_facecolor('#FAFAFA')

# Color scheme
primary_blue = '#6366F1'
primary_purple = '#8B5CF6'
dark_gray = '#2D3748'
light_gray = '#CBD5E0'
white = '#FFFFFF'

# Helper function to draw dashed arrow
def draw_arrow(x1, y1, x2, y2, style='solid', color=dark_gray, width=2):
    if style == 'dashed':
        arrow = FancyArrowPatch((x1, y1), (x2, y2),
                              arrowstyle='->', mutation_scale=20,
                              linestyle='--', linewidth=width, color=color,
                              alpha=0.7)
    else:
        arrow = FancyArrowPatch((x1, y1), (x2, y2),
                              arrowstyle='->', mutation_scale=20,
                              linewidth=width, color=color,
                              alpha=0.8)
    ax.add_patch(arrow)

# Helper function to draw a box
def draw_box(x, y, width, height, label, sublabel='', color=primary_blue, text_color=white):
    box = FancyBboxPatch((x, y), width, height,
                         boxstyle="round,pad=0.1",
                         edgecolor=color, facecolor=white,
                         linewidth=2.5, alpha=0.9)
    ax.add_patch(box)
    
    if sublabel:
        ax.text(x + width/2, y + height/2 + 1.5, label,
               fontsize=11, weight='bold', ha='center', va='center',
               color=dark_gray)
        ax.text(x + width/2, y + height/2 - 1.5, sublabel,
               fontsize=8, ha='center', va='center',
               color=dark_gray, alpha=0.6, style='italic')
    else:
        ax.text(x + width/2, y + height/2, label,
               fontsize=11, weight='bold', ha='center', va='center',
               color=dark_gray)

# Helper to draw dollar icon
def draw_dollar_icon(x, y, size=2):
    circle = Circle((x, y), size, facecolor=primary_purple, 
                   edgecolor=dark_gray, linewidth=1.5, alpha=0.3)
    ax.add_patch(circle)
    ax.text(x, y, '$', fontsize=16, ha='center', va='center',
           color=primary_purple, weight='bold')

# Helper to draw swap icon
def draw_swap_icon(x, y, size=1.5):
    # Two curved arrows
    ax.annotate('', xy=(x+size, y+0.5), xytext=(x-size, y+0.5),
               arrowprops=dict(arrowstyle='->', lw=2, color=primary_purple))
    ax.annotate('', xy=(x-size, y-0.5), xytext=(x+size, y-0.5),
               arrowprops=dict(arrowstyle='->', lw=2, color=primary_purple))

# Helper to draw lock icon
def draw_lock_icon(x, y, size=1.5):
    # Lock body
    rect = Rectangle((x-size/2, y-size), size, size*1.2,
                    facecolor=primary_purple, edgecolor=dark_gray,
                    linewidth=1.5, alpha=0.3)
    ax.add_patch(rect)
    # Lock shackle
    arc = Wedge((x, y), size*0.8, 0, 180, width=0.3,
               facecolor='none', edgecolor=dark_gray, linewidth=2)
    ax.add_patch(arc)

# Helper to draw robot icon
def draw_robot_icon(x, y, size=2.5):
    # Head
    square = Rectangle((x-size/2, y-size/2), size, size,
                      facecolor=white, edgecolor=primary_purple,
                      linewidth=2)
    ax.add_patch(square)
    # Eyes
    ax.plot(x-size/4, y+size/6, 'o', color=primary_purple, markersize=6)
    ax.plot(x+size/4, y+size/6, 'o', color=primary_purple, markersize=6)
    # Antenna
    ax.plot([x, x], [y+size/2, y+size/2+0.8], color=primary_purple, linewidth=2)
    ax.plot(x, y+size/2+0.8, 'o', color=primary_purple, markersize=8)

# Helper to draw brain icon
def draw_brain_icon(x, y, size=3):
    # Brain outline with curves
    circle1 = Circle((x-size/3, y), size/1.5, facecolor='none',
                    edgecolor=primary_blue, linewidth=2.5)
    circle2 = Circle((x+size/3, y), size/1.5, facecolor='none',
                    edgecolor=primary_blue, linewidth=2.5)
    ax.add_patch(circle1)
    ax.add_patch(circle2)
    # Inner details
    for i in range(-1, 2):
        ax.plot([x-size/2+i*0.5, x-size/4+i*0.5], [y+0.5, y-0.5],
               color=primary_blue, linewidth=1.5, alpha=0.5)
        ax.plot([x+size/4+i*0.5, x+size/2+i*0.5], [y+0.5, y-0.5],
               color=primary_blue, linewidth=1.5, alpha=0.5)

# Helper function to draw section header
def draw_section_header(x, y, text, color=dark_gray):
       ax.text(x, y, text, fontsize=12, weight='bold', color=color,
                     style='italic', alpha=0.85)
       ax.plot([x-2, x+30], [y-1, y-1], color=color, linewidth=1.2, alpha=0.25)

# =====================================================================
# 1. USER INTERFACE (Top Left)
# =====================================================================
draw_section_header(5, 122, 'USER INTERFACE')

# Phone/Laptop screen
screen = FancyBboxPatch((8, 105), 18, 12,
                       boxstyle="round,pad=0.15",
                       edgecolor=dark_gray, facecolor=white,
                       linewidth=2.5)
ax.add_patch(screen)

# Screen details
ax.plot([9, 25], [116, 116], color=light_gray, linewidth=1)
ax.text(17, 113, 'Web/Mobile App', fontsize=8, ha='center', color=dark_gray)
ax.text(17, 109.5, '"Invest $10 in', fontsize=9, ha='center', 
       color=primary_blue, weight='bold')
ax.text(17, 107, 'ETH monthly"', fontsize=9, ha='center',
       color=primary_blue, weight='bold')

# Robot icon
draw_robot_icon(32, 110, size=2.5)
ax.text(32, 105.5, 'AI Agent', fontsize=8, ha='center', color=dark_gray,
       weight='bold')

# =====================================================================
# 2. NO WALLET BADGE (Top Right)
# =====================================================================
badge_x, badge_y = 65, 115
badge = FancyBboxPatch((badge_x, badge_y), 28, 8,
                      boxstyle="round,pad=0.2",
                      edgecolor=primary_purple, facecolor=primary_purple,
                      linewidth=3, alpha=0.9)
ax.add_patch(badge)
ax.text(badge_x + 14, badge_y + 5.5, 'NO WALLET', fontsize=13,
       ha='center', weight='bold', color=white)
ax.text(badge_x + 14, badge_y + 2.5, 'NEEDED', fontsize=13,
       ha='center', weight='bold', color=white)

# Account Abstraction - key icon
key_x, key_y = badge_x + 14, badge_y - 3
circle = Circle((key_x, key_y), 1.2, facecolor=primary_purple, 
               edgecolor=dark_gray, linewidth=1.5)
ax.add_patch(circle)
ax.plot([key_x+1.2, key_x+2.5], [key_y, key_y], color=primary_purple, linewidth=3)
ax.plot([key_x+1.8, key_x+1.8], [key_y, key_y+0.5], color=white, linewidth=2)
ax.plot([key_x+2.2, key_x+2.2], [key_y, key_y+0.5], color=white, linewidth=2)
ax.text(badge_x + 14, badge_y - 6, 'Account Abstraction', fontsize=8,
       ha='center', color=dark_gray, style='italic')

# =====================================================================
# 3. AI LAYER (Center Top)
# =====================================================================
draw_section_header(28, 98, 'AI INTELLIGENCE LAYER', color=primary_blue)

# AI Brain box
ai_box = FancyBboxPatch((25, 82), 50, 12,
                       boxstyle="round,pad=0.2",
                       edgecolor=primary_blue, facecolor=white,
                       linewidth=3, alpha=0.9, linestyle='-')
ax.add_patch(ai_box)

# Brain icon
draw_brain_icon(35, 89, size=3.5)

# Text
ax.text(55, 90.5, 'GPT-4 Parsing Engine', fontsize=12, ha='center',
       weight='bold', color=primary_blue)
ax.text(55, 87, 'Natural Language → Structured Data', fontsize=9,
       ha='center', color=dark_gray, style='italic')
ax.text(55, 84.5, 'Intent Recognition & Validation', fontsize=8,
       ha='center', color=dark_gray, alpha=0.7)

# Arrow from user to AI
draw_arrow(26, 105, 40, 94, style='solid', color=primary_blue, width=2.5)

# =====================================================================
# 4. SMART CONTRACT LAYER (Center)
# =====================================================================
draw_section_header(28, 75, 'SMART CONTRACT LAYER', color=primary_purple)

# Contract boxes
contract_y = 52
contract_spacing = 22

# Box 1: SIP Vault
draw_box(15, contract_y, 18, 14, 'SIP Vault', 'Deposit Manager', color=primary_purple)
draw_dollar_icon(24, contract_y + 10, size=2)

# Box 2: Swap Engine
draw_box(41, contract_y, 18, 14, 'Swap Engine', 'DEX Integration', color=primary_purple)
draw_swap_icon(50, contract_y + 10, size=1.5)

# Box 3: Staking Vault
draw_box(67, contract_y, 18, 14, 'Staking Vault', 'Yield Generation', color=primary_purple)
draw_lock_icon(76, contract_y + 11, size=1.5)

# Arrows connecting contracts (solid for direct flow)
draw_arrow(33, 59, 41, 59, style='solid', color=primary_purple, width=2.5)
draw_arrow(59, 59, 67, 59, style='solid', color=primary_purple, width=2.5)

# Arrow from AI to contracts
draw_arrow(50, 82, 50, 66, style='solid', color=primary_blue, width=2.5)

# =====================================================================
# 5. BLOCKCHAIN LAYER (Bottom)
# =====================================================================
draw_section_header(30, 43, 'BLOCKCHAIN INFRASTRUCTURE', color=dark_gray)

# Main blockchain representation
blockchain_box = FancyBboxPatch((15, 20), 70, 18,
                               boxstyle="round,pad=0.3",
                               edgecolor=dark_gray, facecolor=white,
                               linewidth=2.5, alpha=0.9)
ax.add_patch(blockchain_box)

# Blockchain network - draw chain links
for i in range(5):
    link_x = 42 + i*3.5
    circle = Circle((link_x, 34), 1.2, facecolor='none',
                   edgecolor=dark_gray, linewidth=2)
    ax.add_patch(circle)
ax.text(50, 30.5, 'Ethereum / L2 Networks', fontsize=11, ha='center',
       weight='bold', color=dark_gray)

# Three sub-components
# Chainlink Automation - clock icon
chainlink_x = 22
clock_circle = Circle((chainlink_x, 25.5), 2, facecolor='none',
                     edgecolor=dark_gray, linewidth=2)
ax.add_patch(clock_circle)
ax.plot([chainlink_x, chainlink_x], [25.5, 27], color=dark_gray, linewidth=2)
ax.plot([chainlink_x, chainlink_x+1], [25.5, 26], color=dark_gray, linewidth=2)
ax.text(chainlink_x, 22, 'Chainlink', fontsize=9, ha='center',
       weight='bold', color=dark_gray)
ax.text(chainlink_x, 20.5, 'Automation', fontsize=8, ha='center',
       color=dark_gray, alpha=0.7, style='italic')

# Uniswap/DEX - exchange icon
dex_x = 50
# Two rotating arrows
arrow1 = FancyArrowPatch((dex_x-1.5, 25), (dex_x+1.5, 26),
                        arrowstyle='->', mutation_scale=15, 
                        linewidth=2, color=dark_gray)
arrow2 = FancyArrowPatch((dex_x+1.5, 25), (dex_x-1.5, 26),
                        arrowstyle='->', mutation_scale=15,
                        linewidth=2, color=dark_gray)
ax.add_patch(arrow1)
ax.add_patch(arrow2)
ax.text(dex_x, 22, 'Uniswap V3', fontsize=9, ha='center',
       weight='bold', color=dark_gray)
ax.text(dex_x, 20.5, 'Token Swaps', fontsize=8, ha='center',
       color=dark_gray, alpha=0.7, style='italic')

# Yield Protocol - chart icon
yield_x = 78
points = [(yield_x-2, 24), (yield_x-1, 25), (yield_x, 24.5), 
         (yield_x+1, 26.5), (yield_x+2, 26)]
for i in range(len(points)-1):
    ax.plot([points[i][0], points[i+1][0]], 
           [points[i][1], points[i+1][1]], 
           color=dark_gray, linewidth=2.5)
ax.text(yield_x, 22, 'Aave/Compound', fontsize=9, ha='center',
       weight='bold', color=dark_gray)
ax.text(yield_x, 20.5, 'Lending Pools', fontsize=8, ha='center',
       color=dark_gray, alpha=0.7, style='italic')

# Dashed arrows from contracts to blockchain (automated flows)
draw_arrow(24, 52, 22, 38, style='dashed', color=primary_purple, width=2)
draw_arrow(50, 52, 50, 38, style='dashed', color=primary_purple, width=2)
draw_arrow(76, 52, 78, 38, style='dashed', color=primary_purple, width=2)

# =====================================================================
# 6. DATA FLOW ANNOTATIONS
# =====================================================================

# Left side flow annotations
ax.text(2, 100, '1', fontsize=10, ha='center', va='center',
       bbox=dict(boxstyle='circle', facecolor=primary_blue, 
                edgecolor=primary_blue, alpha=0.8),
       color=white, weight='bold')
ax.text(2, 96, 'User\nInput', fontsize=7, ha='center', color=dark_gray)

ax.text(2, 78, '2', fontsize=10, ha='center', va='center',
       bbox=dict(boxstyle='circle', facecolor=primary_blue,
                edgecolor=primary_blue, alpha=0.8),
       color=white, weight='bold')
ax.text(2, 74, 'Parse &\nValidate', fontsize=7, ha='center', color=dark_gray)

ax.text(2, 59, '3', fontsize=10, ha='center', va='center',
       bbox=dict(boxstyle='circle', facecolor=primary_purple,
                edgecolor=primary_purple, alpha=0.8),
       color=white, weight='bold')
ax.text(2, 55, 'Execute\nContracts', fontsize=7, ha='center', color=dark_gray)

ax.text(2, 30, '4', fontsize=10, ha='center', va='center',
       bbox=dict(boxstyle='circle', facecolor=dark_gray,
                edgecolor=dark_gray, alpha=0.8),
       color=white, weight='bold')
ax.text(2, 26, 'On-Chain\nExecution', fontsize=7, ha='center', color=dark_gray)

# =====================================================================
# 7. LEGEND
# =====================================================================
legend_y = 10
ax.text(50, legend_y + 3, 'FLOW LEGEND', fontsize=10, ha='center',
       weight='bold', color=dark_gray, alpha=0.7)

# Solid line
ax.plot([30, 38], [legend_y, legend_y], color=dark_gray, linewidth=2.5,
       solid_capstyle='round')
ax.text(42, legend_y, 'User Action / Direct Flow', fontsize=8, va='center',
       color=dark_gray)

# Dashed line
ax.plot([30, 38], [legend_y - 3, legend_y - 3], color=primary_purple,
       linewidth=2.5, linestyle='--', solid_capstyle='round')
ax.text(42, legend_y - 3, 'Automated Process', fontsize=8, va='center',
       color=dark_gray)

# =====================================================================
# 8. FOOTER ONLY (minimize header clutter)
# =====================================================================
ax.text(50, 4, 'DeFi SIP AI Agent • Architecture Blueprint v1.0',
        fontsize=9, ha='center', color=dark_gray, alpha=0.7, style='italic')
ax.text(50, 2, '© 2025 SipLedger — Technical Architecture Documentation',
        fontsize=8, ha='center', color=dark_gray, alpha=0.45, style='italic')

# Add blueprint grid effect (subtle)
for i in range(0, 130, 10):
    ax.axhline(y=i, color=light_gray, linewidth=0.3, alpha=0.2)
for i in range(0, 100, 10):
    ax.axvline(x=i, color=light_gray, linewidth=0.3, alpha=0.2)

plt.tight_layout()

# Save a tall, high-res blueprint (default coordinates)
plt.savefig('e:/solidity/SipLedger/defi_sip_architecture_tall.png',
            dpi=300, bbox_inches='tight', facecolor='#FAFAFA')

# Also export a true 4K 16:9 variant
orig_size = fig.get_size_inches()
fig.set_size_inches(12.8, 7.2)  # 3840x2160 at 300 dpi
plt.tight_layout()
plt.savefig('e:/solidity/SipLedger/defi_sip_architecture_4k.png',
            dpi=300, bbox_inches='tight', facecolor='#FAFAFA')
fig.set_size_inches(*orig_size)

print("Architecture diagrams generated successfully!")
print("Saved as: defi_sip_architecture_tall.png and defi_sip_architecture_4k.png")
